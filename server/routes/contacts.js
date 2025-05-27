
const express = require('express');
const router = express.Router();
const { pool } = require('../config/database');

// Create new contact message
router.post('/', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Nome, email e mensagem são obrigatórios' 
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contacts (name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, email, phone, subject, message]
    );

    console.log('📧 New contact message created:', {
      id: result.rows[0].id,
      name,
      email,
      subject: subject || 'Sem assunto'
    });

    res.status(201).json({
      success: true,
      message: 'Mensagem de contato enviada com sucesso',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Error creating contact:', error);
    res.status(500).json({ 
      error: 'Erro interno do servidor ao enviar mensagem' 
    });
  }
});

// Get all contacts (with pagination)
router.get('/', async (req, res) => {
  const { page = 1, limit = 10, status } = req.query;
  const offset = (page - 1) * limit;

  try {
    let query = 'SELECT * FROM contacts';
    let countQuery = 'SELECT COUNT(*) FROM contacts';
    const queryParams = [];

    if (status) {
      query += ' WHERE status = $1';
      countQuery += ' WHERE status = $1';
      queryParams.push(status);
    }

    query += ` ORDER BY created_at DESC LIMIT $${queryParams.length + 1} OFFSET $${queryParams.length + 2}`;
    queryParams.push(limit, offset);

    const [contactsResult, countResult] = await Promise.all([
      pool.query(query, queryParams),
      pool.query(countQuery, queryParams.slice(0, -2))
    ]);

    const totalContacts = parseInt(countResult.rows[0].count);
    const totalPages = Math.ceil(totalContacts / limit);

    res.json({
      success: true,
      data: contactsResult.rows,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalContacts,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    console.error('❌ Error fetching contacts:', error);
    res.status(500).json({ 
      error: 'Erro ao buscar mensagens de contato' 
    });
  }
});

// Update contact status
router.patch('/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['pending', 'read', 'replied', 'archived'];
  
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ 
      error: 'Status inválido. Use: pending, read, replied, archived' 
    });
  }

  try {
    const result = await pool.query(
      'UPDATE contacts SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ 
        error: 'Mensagem de contato não encontrada' 
      });
    }

    res.json({
      success: true,
      message: 'Status atualizado com sucesso',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Error updating contact status:', error);
    res.status(500).json({ 
      error: 'Erro ao atualizar status da mensagem' 
    });
  }
});

module.exports = router;
