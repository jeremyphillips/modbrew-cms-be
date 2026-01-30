import { Model, UpdateQuery } from "mongoose";
import { Request, Response } from "express";

export default function createCRUDController<T>(model: Model<T>) {
  return {
    async getAll(req: Request, res: Response) {
      const docs = await model.find();
      res.json(docs);
    },

    async getById(req: Request, res: Response) {
      const doc = await model.findById(req.params.id);
      if (!doc) return res.status(404).end();
      res.json(doc);
    },

    async create(req: Request, res: Response) {
      const doc = await model.create(req.body as T);
      res.status(201).json(doc);
    },

    async update(req: Request, res: Response) {
      const doc = await model.findByIdAndUpdate(
        req.params.id,
        req.body as UpdateQuery<T>,
        { new: true },
      );
      if (!doc) return res.status(404).end();
      res.json(doc);
    },

    async remove(req: Request, res: Response) {
      await model.findByIdAndDelete(req.params.id);
      res.status(204).end();
    },
  };
}
