const { object, string, number, date } = require('yup');

const productSchema = object({
  name: string().required('O nome é obrigatório'),
  description: string().required('A descrição é obrigatória'),
  color: string().required('A cor é obrigatória'),
  weight: number()
    .positive('O peso deve ser um número positivo')
    .required('O peso é obrigatório'),
  type: string().required('O tipo é obrigatório'),
  price: number()
    .positive('O preço deve ser um número positivo')
    .required('O preço é obrigatório'),
  registerDate: date()
    .typeError('registerDate deve ser uma data válida (formato ISO: YYYY-MM-DDTHH:mm:ssZ)')
    .required('A data de registro é obrigatória'),
});

const validateProduct = async (req, res, next) => {
  try {
    await productSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    return res.status(400).json({
      message: 'Erro de validação',
      errors: error.errors,
    });
  }
};

module.exports = validateProduct;
