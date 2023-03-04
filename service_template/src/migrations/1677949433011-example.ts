import { MigrationInterface, QueryRunner } from "typeorm";

export class example1677949433011 implements MigrationInterface {
    name = 'example1677949433011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`example\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`slug\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`createTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), INDEX \`IDX_5f6dc7904496a674b727c1dc75\` (\`slug\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_5f6dc7904496a674b727c1dc75\` ON \`example\``);
        await queryRunner.query(`DROP TABLE \`example\``);
    }

}
