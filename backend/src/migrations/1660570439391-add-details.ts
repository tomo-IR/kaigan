import {MigrationInterface, QueryRunner} from "typeorm";

export class addDetails1660570439391 implements MigrationInterface {
    name = 'addDetails1660570439391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`details\` (\`id\` int NOT NULL AUTO_INCREMENT, \`memo\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`details\``);
    }

}
