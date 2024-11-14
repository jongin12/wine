import { Inject, Injectable } from '@nestjs/common';
import { User } from 'entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_PROVIDERS')
    private userRepository: Repository<User>,
  ) {}

  async signUp(body: any) {
    const { email, name, password } = body;
    if (!email || !name || !password) {
      return '값이 없습니다.';
    }
    const a = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    if (a) {
      return '아이디 중복';
    }

    await this.userRepository.save(body);

    return '가입 성공';
  }

  async signIn(body: any) {
    const { email, password } = body;
    if (!email || !password) {
      return '값이 없습니다.';
    }
    const a = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    if (!a) {
      return '존재하지 않는 아이디';
    }
    if (a.password !== password) {
      return '비밀번호 오류';
    }
    await this.userRepository.update(
      { userId: a.userId },
      { lastLoginDate: new Date() },
    );
    return '로그인 성공';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, body: any) {
    return `This action updates a #${id} user`;
  }
}
