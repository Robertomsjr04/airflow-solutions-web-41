
const express = require('express');
const router = express.Router();
const { pool } = require('../config/database');

// Create new quote request
router.post('/', async (req, res) => {
  const { 
    name, 
    email, 
    phone, 
    company, 
    service, 
    projectType, 
    area, 
    description,
    priority = 'medium'
  } = req.body;

  // Validation
  if (!name || !email || !service) {
    return res.status(400).json({ 
      error: 'Nome, email e serviço são obrigatórios' 
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO quotes (name, email, phone, company, service, project_type, area, description, priority)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [name, email, phone, company, service, projectType, area, description, priority]
    );

    console.log('📝 New quote request created:', {
      id: result.rows[0].id,
      name,
      email,
      service
    });

    res.status(201).json({
      success: true,
      message: 'Solicitação de orçamento criada com sucesso',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Error creating quote:', error);
    res.status(500).json({ 
      error: 'Erro interno do servidor ao criar solicitação' 
    });
  }
});

// Get all quotes (with pagination)
router.get('/', async (req, res) => {
  const { page = 1, limit = 10, status, service } = req.query;
  const offset = (page - 1) * limit;

  try {
    let query = 'SELECT * FROM quotes';
    let countQuery = 'SELECT COUNT(*) FROM quotes';
    const queryParams = [];
    const conditions = [];

    if (status) {
      conditions.push(`status = $${queryParams.length + 1}`);
      queryParams.push(status);
    }

    if (service) {
      conditions.push(`service = $${queryParams.length + 1}`);
      queryParams.push(service);
    }

    if (conditions.length > 0) {
      const whereClause = ` WHERE ${conditions.join(' AND ')}`;
      query += whereClause;
      countQuery += whereClause;
    }

    query += ` ORDER BY created_at DESC LIMIT $${queryParams.length + 1} OFFSET $${queryParams.length + 2}`;
    queryParams.push(limit, offset);

    const [quotesResult, countResult] = await Promise.all([
      pool.query(query, queryParams),
      pool.query(countQuery, queryParams.slice(0, -2))
    ]);

    const totalQuotes = parseInt(countResult.rows[0].count);
    const totalPages = Math.ceil(totalQuotes / limit);

    res.json({
      success: true,
      data: quotesResult.rows,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalQuotes,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    console.error('❌ Error fetching quotes:', error);
    res.status(500).json({ 
      error: 'Erro ao buscar solicitações de orçamento' 
    });
  }
});

// Get quote by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM quotes WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ 
        error: 'Solicitação de orçamento não encontrada' 
      });
    }

    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Error fetching quote:', error);
    res.status(500).json({ 
      error: 'Erro ao buscar solicitação de orçamento' 
    });
  }
});

// Update quote status
router.patch('/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['pending', 'in_progress', 'completed', 'cancelled'];
  
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ 
      error: 'Status inválido. Use: pending, in_progress, completed, cancelled' 
    });
  }

  try {
    const result = await pool.query(
      'UPDATE quotes SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ 
        error: 'Solicitação de orçamento não encontrada' 
      });
    }

    res.json({
      success: true,
      message: 'Status atualizado com sucesso',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Error updating quote status:', error);
    res.status(500).json({ 
      error: 'Erro ao atualizar status da solicitação' 
    });
  }
});

module.exports = router;
