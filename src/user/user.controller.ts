import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto, UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userservice: UserService
    ) {}

    @Get()
    getAllUser() {
        return this.userservice.getAllUser()
    }

    @Get(':id')
    getOneUser(@Param('id') id: number) {
        return this.userservice.getOneUser(id)
    }

    @Post()
    createUser(@Body() UserData: UserDto) {
        return this.userservice.createUser(UserData)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.userservice.deleteUser(id)
    }

    @Patch(':id')
    updateUser(
        @Param('id') id: number,
        @Body() updateUserDto: UpdateUserDto,
        ) {
        return this.userservice.updateUser(id,updateUserDto)
    }
}
