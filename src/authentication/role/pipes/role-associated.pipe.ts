import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from '../../user/dto/user.dto';
import { CreateUserDTO } from '../../user/dto/create-user.dto';
import { AssociateRolesDTO } from '../../user/dto/associate-roles.dto';
import { Role } from '../role.entity';
import { UserService } from '../../user/user.service';

@Injectable()
export class RoleAssociatedPipe implements PipeTransform {
    constructor(private readonly userService: UserService) { }

    async transform(x: AssociateRolesDTO) {
        const userRoles = await this.userService.getRoles(x.userId);
        const notAssociated = x.roles.filter(x => userRoles.every(y => y.name != x));

        if (notAssociated.length) throw new BadRequestException(`The following roles are not associated with user ${x.userId}: ${notAssociated.reduce((x, y) => `${x}, ${y}`)}`);
        else return x;
    }
}
