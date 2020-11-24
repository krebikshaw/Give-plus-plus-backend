const db = require('../models');
const faq_category = require('../models/faq_category');
const Faq = db.Faq;
const Faq_categories = db.Faq_categories;
const Rule = db.Rule;
const Mail = db.Mail;

const manageController = {
  getAllRules: (req, res) => {
    Rule.findAll()
      .then((rules) => {
        const rulesData = {
          ok: 1,
          data: rules.map((rule) => {
            return {
              id: rule.id,
              rule: rule.rule,
              content: rule.content,
            };
          }),
        };
        return res.status(200).json(rulesData);
      })
      .catch((err) => {
        return res.status(400).json({ ok: 0, error: err });
      });
  },

  getRule: (req, res) => {
    Rule.findByPk(req.params.id)
      .then((rule) => {
        const ruleData = {
          ok: 1,
          data: {
            id: rule.id,
            rule: rule.rule,
            content: rule.content,
          },
        };
        return res.status(200).json(ruleData);
      })
      .catch(() => {
        return res
          .status(400)
          .json({ ok: 0, data: 'This rule does not exist.' });
      });
  },

  addRule: (req, res) => {
    const { rule, content } = req.body;
    if (rule.trim() === '' || content.trim() === '') {
      return res
        .status(400)
        .json({ ok: 0, data: 'necessary data cannot be empty' });
    }
    Rule.create({
      rule,
      content,
    })
      .then(() => {
        return res.status(200).json({ ok: 1, data: 'success' });
      })
      .catch(() => {
        return res
          .status(400)
          .json({ ok: 0, data: 'something wrong, please add again.' });
      });
  },

  editRule: (req, res) => {
    const { rule, content } = req.body;
    if (rule.trim() === '' || content.trim() === '') {
      return res
        .status(400)
        .json({ ok: 0, data: 'necessary data cannot be empty' });
    }
    Rule.findByPk(req.params.id)
      .then((ruleData) => {
        ruleData
          .update({
            rule,
            content,
          })
          .then(() => {
            return res.status(200).json({ ok: 1, data: 'success' });
          })
          .catch(() => {
            return res.status(400).json({ ok: 0, data: 'fail' });
          });
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ ok: 0, data: 'This rule does not exist.' });
      });
  },

  deleteRule: (req, res) => {
    Rule.findByPk(req.params.id)
      .then((rule) => {
        rule
          .destroy()
          .then(() => {
            return res.status(200).json({ ok: 1, data: 'success' });
          })
          .catch(() => {
            return res.status(400).json({ ok: 0, data: 'fail' });
          });
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ ok: 0, data: 'This rule does not exist.' });
      });
  },

  getAllFaqs: (req, res) => {
    Faq.findAll({
      include: Faq_categories,
    })
      .then((faqs) => {
        const faqsData = {
          ok: 1,
          data: faqs.map((faq) => {
            return {
              id: faq.id,
              category: faq.Faq_category.name,
              question: faq.question,
              answer: faq.answer,
            };
          }),
        };
        return res.status(200).json(faqsData);
      })
      .catch((err) => {
        return res.status(400).json({ ok: 0, error: err });
      });
  },

  getFaq: (req, res) => {
    Faq.findByPk(req.params.id)
      .then((faq) => {
        const faqData = {
          ok: 1,
          data: {
            id: faq.id,
            categoryId: faq.faqCategoryId,
            question: faq.question,
            answer: faq.answer,
          },
        };
        return res.status(200).json(faqData);
      })
      .catch(() => {
        return res
          .status(400)
          .json({ ok: 0, data: 'This faq does not exist.' });
      });
  },

  addFaq: (req, res) => {
    const { question, answer, faqCategoryId } = req.body;
    if (question.trim() === '' || answer.trim() === '' || !faqCategoryId) {
      return res
        .status(400)
        .json({ ok: 0, data: 'necessary data cannot be empty' });
    }
    Faq.create({
      question,
      answer,
      faqCategoryId,
    })
      .then(() => {
        return res.status(200).json({ ok: 1, data: 'success' });
      })
      .catch(() => {
        return res
          .status(400)
          .json({ ok: 0, data: 'something wrong, please add again.' });
      });
  },

  editFaq: (req, res) => {
    const { question, answer, faqCategoryId } = req.body;
    if (question.trim() === '' || answer.trim() === '' || !faqCategoryId) {
      return res
        .status(400)
        .json({ ok: 0, data: 'necessary data cannot be empty.' });
    }
    Faq.findByPk(req.params.id)
      .then((faqData) => {
        faqData
          .update({
            question,
            answer,
            faqCategoryId,
          })
          .then(() => {
            return res.status(200).json({ ok: 1, data: 'success' });
          })
          .catch(() => {
            return res.status(400).json({ ok: 0, data: 'fail' });
          });
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ ok: 0, data: 'This faq does not exist.' });
      });
  },

  deleteFaq: (req, res) => {
    Faq.findByPk(req.params.id)
      .then((faq) => {
        faq
          .destroy()
          .then(() => {
            return res.status(200).json({ ok: 1, data: 'success' });
          })
          .catch(() => {
            return res.status(400).json({ ok: 0, data: 'fail' });
          });
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ ok: 0, data: 'This faq does not exist.' });
      });
  },

  getAllFaqCategories: (req, res) => {
    Faq_categories.findAll()
      .then((faqCategories) => {
        const faqCategoriesData = {
          ok: 1,
          data: faqCategories.map((faqCategories) => {
            return {
              id: faqCategories.id,
              name: faqCategories.name,
            };
          }),
        };
        return res.status(200).json(faqCategoriesData);
      })
      .catch((err) => {
        return res.status(400).json({ ok: 0, error: err });
      });
  },

  addFaqCategory: (req, res) => {
    const { name } = req.body;
    if (name.trim() === '') {
      return res
        .status(400)
        .json({ ok: 0, data: 'necessary data cannot be empty' });
    }
    Faq_categories.create({
      name,
    })
      .then(() => {
        return res.status(200).json({ ok: 1, data: 'success' });
      })
      .catch(() => {
        return res
          .status(400)
          .json({ ok: 0, data: 'something wrong, please add again.' });
      });
  },

  editFaqCategory: (req, res) => {
    const { name } = req.body;
    if (name.trim() === '') {
      return res
        .status(400)
        .json({ ok: 0, data: 'necessary data cannot be empty.' });
    }
    Faq_categories.findByPk(req.params.id)
      .then((faqCategory) => {
        faqCategory
          .update({
            name,
          })
          .then(() => {
            return res.status(200).json({ ok: 1, data: 'success' });
          })
          .catch(() => {
            return res.status(400).json({ ok: 0, data: 'fail' });
          });
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ ok: 0, data: 'This faq category does not exist.' });
      });
  },

  deleteFaqCategory: (req, res) => {
    Faq_categories.findByPk(req.params.id)
      .then((faqCategory) => {
        faqCategory
          .destroy()
          .then(() => {
            return res.status(200).json({ ok: 1, data: 'success' });
          })
          .catch(() => {
            return res.status(400).json({ ok: 0, data: 'fail' });
          });
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ ok: 0, data: 'This faq category does not exist.' });
      });
  },

  getAllMails: (req, res) => {
    Mail.findAll()
      .then((mails) => {
        const mailsData = {
          ok: 1,
          data: mails.map((mail) => {
            return {
              id: mail.id,
              name: mail.name,
              email: mail.phone,
              content: mail.content,
            };
          }),
        };
        return res.status(200).json(mailsData);
      })
      .catch((err) => {
        return res.status(400).json({ ok: 0, error: err });
      });
  },

  getMail: (req, res) => {
    Mail.findByPk(req.params.id)
      .then((mail) => {
        const mailData = {
          ok: 1,
          data: {
            id: mail.id,
            name: mail.name,
            email: mail.phone,
            content: mail.content,
          },
        };
        return res.status(200).json(mailData);
      })
      .catch(() => {
        return res
          .status(400)
          .json({ ok: 0, data: 'This mail does not exist.' });
      });
  },

  proveProductStatus: (req, res) => {},
};

module.exports = manageController;
