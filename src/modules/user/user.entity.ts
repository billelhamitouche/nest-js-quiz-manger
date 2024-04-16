import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { ApiProperty } from "@nestjs/swagger";
import { UserRoles } from "./enums/user.enum";
@Entity('user')
export class User extends BaseEntity{
  @ApiProperty({description:'Primary key User id',example:1})
    @PrimaryGeneratedColumn()
    id: number;


    @ApiProperty({description:'User name',example:'jhon doe'})
    @Column()    
    
    name : string;

    @ApiProperty({description:'User email address',example:'jhon.doe@gmail.com'})  
    @Column({
        unique :true
    })    
    
    email : string;
    
    @ApiProperty({description:'hashed user password'})
    @Column()    
    
    password : string;



    @ApiProperty({description:'when user created'})
    @CreateDateColumn()
    
    createdAt : Date;
    
    @ApiProperty({description:'when user updated'})
    @UpdateDateColumn()

    updatedAt :Date;

    @Column({
      type:'enum',
      enum:UserRoles,
      default:UserRoles.MEMBER,
    })
    role: UserRoles;

    @BeforeInsert()
    async setPassword(password :string){
      const salt =  await bcrypt.genSalt();
      this.password =  await bcrypt.hash(password || this.password,salt);
      
    }
}