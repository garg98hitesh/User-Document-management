import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'viewer' }) 
  role: string; // Can be 'admin', 'editor', 'viewer',

  @Column("simple-array", { default: '' }) 
  permissions: string[]; // Example: ['read', 'write', 'delete']
}
