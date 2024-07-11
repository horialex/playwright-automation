import { test } from '../utils/Fixtures';

test('login test', async ({ page, loginSteps }) => {
    await loginSteps.goToLoginPage();
    await loginSteps.login(process.env.EMAIL, process.env.PASSWORD)
    await loginSteps.assertUserIsLoggedIn(process.env.NAME)
});