import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    name: 'user_id',
    comment: '아이디',
  })
  userId: number;

  @Column({ name: 'email', comment: '유저 이메일' })
  email: string;

  @Column({ name: 'password', comment: '비밀번호' })
  password: string;

  @Column({ name: 'name', comment: '담당자 이름 또는 담당자 닉네임' })
  name: string;

  @Column({ name: 'refresh_token', comment: '리프레시 토큰', nullable: true })
  refreshToken: string;

  @Column({ name: 'last_login_date', comment: '마지막 로그인', nullable: true })
  lastLoginDate: Date;
}
