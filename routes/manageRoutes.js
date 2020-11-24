const express = require('express');
const manageRouter = express.Router();
const checkAuth = require('../middlewares/auth');
const manageController = require('../controllers/manageController');

manageRouter.get('/rules', manageController.getAllRules);
manageRouter.get('/rules/:id', manageController.getRule);
manageRouter.post('/rules/new', manageController.addRule);
manageRouter.patch('/rules/:id', manageController.editRule);
manageRouter.delete('/rules/:id', manageController.deleteRule);

manageRouter.get('/faqs', manageController.getAllFaqs);
manageRouter.get('/faqs/:id', manageController.getFaq);
manageRouter.post('/faqs/new', manageController.addFaq);
manageRouter.patch('/faqs/:id', manageController.editFaq);
manageRouter.delete('/faqs/:id', manageController.deleteFaq);

manageRouter.get('/faq-categories', manageController.getAllFaqCategories);
manageRouter.post('/faq-categories/new', manageController.addFaqCategory);
manageRouter.patch('/faq-categories/:id', manageController.editFaqCategory);
manageRouter.delete('/faq-categories/:id', manageController.deleteFaqCategory);

manageRouter.get('/mails', manageController.getAllMails);
manageRouter.get('/mail/:id', manageController.getMail);

module.exports = manageRouter;
