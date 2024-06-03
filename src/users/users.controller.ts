import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from 'src/dto/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from 'src/dto/UpdateUser.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('User not found!', 404);
    const findUser = await this.userService.getUserById(id);
    if (!findUser) throw new HttpException('User not found!', 404);
    return findUser;
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const isValid = await mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid user!', 404);
    const updatedUser = await this.userService.updateUser(id, updateUserDto);
    if (!updatedUser) throw new HttpException('User not found!', 404);
    console.log(updatedUser);
    return updatedUser;
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: string) {
    // const isValid = await mongoose.Types.ObjectId.isValid(id);
    // if (!isValid) throw new HttpException('Invalid user!', 404);
    const deletedUser = await this.userService.deleteUserById(id);
    if (!deletedUser) throw new HttpException('User not found!', 404);
    console.log(deletedUser);
    return;
  }
}
