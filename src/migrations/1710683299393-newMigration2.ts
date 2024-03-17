import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration21710683299393 implements MigrationInterface {
    name = 'NewMigration21710683299393'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

}
