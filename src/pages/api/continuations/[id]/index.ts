import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { continuationValidationSchema } from 'validationSchema/continuations';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.continuation
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getContinuationById();
    case 'PUT':
      return updateContinuationById();
    case 'DELETE':
      return deleteContinuationById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getContinuationById() {
    const data = await prisma.continuation.findFirst(convertQueryToPrismaUtil(req.query, 'continuation'));
    return res.status(200).json(data);
  }

  async function updateContinuationById() {
    await continuationValidationSchema.validate(req.body);
    const data = await prisma.continuation.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteContinuationById() {
    const data = await prisma.continuation.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
