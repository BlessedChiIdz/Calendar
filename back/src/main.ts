import {NestFactory} from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import {AppModule} from "./app.module";

async function start(){
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)


    const config = new DocumentBuilder()
        .setTitle('Calendar')
        .setDescription('Приложение для составления рассписания')
        .setVersion('1.0.0')
        .addTag('CLDR')
        .build()

    const document = SwaggerModule.createDocument(app,config)
    SwaggerModule.setup('/api/docs',app,document)
    await app.listen(PORT,()=> console.log(`server started in port = ${PORT}`))
}

start()