import { Controller, Get, Post,Put, Body, Param, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Post()
  createUser(@Body() data: any) {
    return this.usersService.createUser(data);
  }

  @Put(':id/role')
  async updateUserRole(@Param('id') id: number, @Body() body: { role: string, requesterRole: string }) {
    if (body.requesterRole !== 'admin') {
      throw new BadRequestException('Only admins can update roles');
    }
    return this.usersService.updateRole(id, body.role);
  }

  @Put(':id/permissions')
  async updateUserPermissions(@Param('id') id: number, @Body() body: { permissions: string[], requesterRole: string }) {
    if (body.requesterRole !== 'admin') {
      throw new BadRequestException('Only admins can update permissions');
    }
    return this.usersService.updatePermissions(id, body.permissions);
  }
}
