import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserRole1710859773941 implements MigrationInterface {
    name = 'AddUserRole1710859773941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'member')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" "public"."user_role_enum" NOT NULL DEFAULT 'member'`);
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    }

}
