import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Example } from "src/entities/example.entity";
import { Repository } from "typeorm";

@Injectable()
export class ExampleRepository {
    constructor(
        @InjectRepository(Example)
        private exampleRepository: Repository<Example>
    ) {}

    async getAll(): Promise<Example[] | undefined> {
        return this.exampleRepository.find()
    }
}