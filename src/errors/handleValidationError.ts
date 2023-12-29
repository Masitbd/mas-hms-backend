import { Prisma } from '@prisma/client';
import { IGenericErrorResponse } from '../interfaces/common';

const handleValidationError = (
  error: Prisma.PrismaClientValidationError
): IGenericErrorResponse => {
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: [{ path: '', message: error.message }],
  };
};

export default handleValidationError;
