import { test, expect, request, APIRequestContext} from "@playwright/test";
import * as preconditions from "../utils/preconditions/preconditions"

test.describe('Test Suite Name', async() => {
    let apiRequest: APIRequestContext;

    test.beforeEach('Create API Context, Create Preconditions', async({ page }) => {
        apiRequest = await request.newContext();

        await preconditions.deleteUsers(apiRequest);
        await preconditions.createUsers(apiRequest);


    })

    test('Unique Test Name', async({ page }) => {

    })

    test.afterEach('Close API request context', async () => {
        await apiRequest.dispose();
    })
})