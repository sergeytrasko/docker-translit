const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();

const optionsService = require("./service/TransliterationService");

router.get("/options", async ctx => {
    const transliterations = await optionsService.getTransliterationOptions();
    ctx.body = transliterations;
});

router.get("/", async ctx => {
    console.log(ctx.request.query);
    const text = ctx.request.query.text;
    const option = ctx.request.query.option;
    console.log(`text: ${text}, option: ${option}`);
    const result = await optionsService.transliterate(option, text);
    ctx.body = result;
});

app.
    use(router.routes()).
    use(router.allowedMethods());

app.listen(3000);

console.log("Server running on port 3000");

