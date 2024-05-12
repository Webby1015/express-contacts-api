const express = require("express");
const router = express.Router();
const { getContacts, createContact, updateContact, deleteContact, getContact } = require("../controllers/contactController");

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: API endpoints for managing contacts
 */

/**
 * @swagger
 * /api/contacts:
 *   get:
 *     summary: Retrieve all contacts
 *     description: Retrieve a list of all contacts.
 *     responses:
 *       '200':
 *         description: A list of contacts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 *   post:
 *     summary: Create a new contact
 *     description: Create a new contact with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       '201':
 *         description: Successfully created a new contact.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 */

/**
 * @swagger
 * /api/contacts/{id}:
 *   get:
 *     summary: Retrieve a contact by ID
 *     description: Retrieve the details of a contact by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the contact to retrieve.
 *     responses:
 *       '200':
 *         description: Details of the requested contact.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *   put:
 *     summary: Update a contact
 *     description: Update the details of a contact by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the contact to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       '200':
 *         description: Successfully updated the contact.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *   delete:
 *     summary: Delete a contact
 *     description: Delete a contact by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the contact to delete.
 *     responses:
 *       '204':
 *         description: Successfully deleted the contact.
 */

router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
