import { Injectable } from "@nestjs/common";
import { Example } from "src/entities/example.entity";
import { ExampleRepository } from "src/repositories/example.repository";

@Injectable()
export class ExampleService {
    constructor(private readonly exampleRepository: ExampleRepository) {}

    async getAll(): Promise<Example[]> {
        return this.exampleRepository.getAll()
    }
}