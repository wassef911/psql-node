
import { Request, Response, NextFunction } from 'express';

import { ClientService } from '../../services/Client.service';
import { CustomError } from '../../utils/customError';
import { CustomSuccess } from '../../utils/customSuccess';

export const update = async (req: Request, res: Response, next: NextFunction) => {
    const clientServiceInstance = new ClientService();
    const id = parseInt(req.params.id);
    try {
        const client = await clientServiceInstance.show(id);
        if (!client) throw new Error("Client not found.")
        const clientUpdated = await clientServiceInstance.update(req.body);
        const customSuccess = CustomSuccess('Client data updated.', clientUpdated);
        return res.status(200).send(customSuccess)
    } catch (err) {
        const customError = CustomError(err.message);
        return res.status(404).send(customError);
    }
};
