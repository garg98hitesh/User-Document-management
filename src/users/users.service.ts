import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }

    getAllUsers() {
        return this.userRepo.find();
    }

    createUser(data: any) {
        return this.userRepo.save(data);
    }
    async updateRole(id: number, role: string) {
        const user = await this.userRepo.findOne({ where: { id } });
        if (!user) throw new Error('User not found');

        user.role = role;
        return this.userRepo.save(user);
    }

    async updatePermissions(id: number, permissions: string[]) {
        const user = await this.userRepo.findOne({ where: { id } });
        if (!user) throw new Error('User not found');

        user.permissions = permissions;
        return this.userRepo.save(user);
    }

}
