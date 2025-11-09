const { Router } = require('express')
const blaguesController = require('../controllers/blaguesController')
const blaguesRouter = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Blague:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID de la blague
 *         question:
 *           type: string
 *           description: Texte de la blague
 *         response:
 *           type: string
 *           description: Reponse de la blague
 *       example:
 *         id: "1"
 *         question: "Quelle est la femelle du hamster ?"
 *         response: "L'Amsterdam."
 */

/**
 * @swagger
 * /v1/blagues:
 *   get:
 *     summary: Recuperer toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blague'
 *       500:
 *         description: Erreur serveur
 */
blaguesRouter.get('/', blaguesController.getBlagues)

/**
 * @swagger
 * /v1/blagues/random:
 *   get:
 *     summary: Récupérer une blague aleatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague aleatoire
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 *       404:
 *         description: Aucune blague trouvee
 *       500:
 *         description: Erreur serveur
 */
blaguesRouter.get('/random', blaguesController.getBlagueRandom)

/**
 * @swagger
 * /v1/blagues/{id}:
 *   get:
 *     summary: Recuperer une blague par son ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la blague
 *     responses:
 *       200:
 *         description: Blague trouvee
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 *       404:
 *         description: Blague non trouvee
 *       500:
 *         description: Erreur serveur
 */
blaguesRouter.get('/:id', blaguesController.getBlagueById)

/**
 * @swagger
 * /v1/blagues:
 *   post:
 *     summary: Creer une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - response
 *             properties:
 *               question:
 *                 type: string
 *                 description: Texte de la blague
 *               response:
 *                 type: string
 *                 description: Reponse de la blague
 *             example:
 *               question: "Quelle est la femelle du hamster ?"
 *               response: "L'Amsterdam."
 *     responses:
 *       201:
 *         description: Blague creee avec succes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 *       400:
 *         description: Donnees invalides
 *       500:
 *         description: Erreur serveur
 */
blaguesRouter.post('/', blaguesController.createBlague)

module.exports = blaguesRouter
