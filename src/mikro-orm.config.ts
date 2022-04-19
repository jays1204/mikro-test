import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { LoadStrategy } from '@mikro-orm/core';
import { User } from './user/user.entity';
import { Article } from './article/article.entity';
import { Comment } from './article/comment.entity';
import { Tag } from './tag/tag.entity';

const config: Options = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  user: 'admin',
  password: 'sc1234!',
  dbName: 'nestjsrealworld',
  entities: [ User, Article, Comment, Tag, ],
  // entities: ['dist/**/*.entity.js'],
  // entitiesTs: ['src/**/*.entity.ts'],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  highlighter: new SqlHighlighter(),
  // metadataProvider: TsMorphMetadataProvider,
  registerRequestContext: false,
  pool: {
    min: 1,
    max: 1
  }
};

export default config;
