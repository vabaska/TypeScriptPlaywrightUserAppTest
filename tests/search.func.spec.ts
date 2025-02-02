import { test, expect, request, APIRequestContext} from "@playwright/test";
import * as preconditions from "../utils/preconditions/preconditions"

test.describe('Should Search Users By Search Criteria', async () => {
    let apiRequest: APIRequestContext;

    test.beforeEach('Before Each Name', async({ page }) => {
        apiRequest = await request.newContext();

        await preconditions.deleteUsers(apiRequest);
        await preconditions.createUsers(apiRequest);


    })

    test('Search User With Unique First Name', async({ page }) => {

    })

    test('Search Users With Non-Unique First Name', async({ page }) => {

    })

    test.afterEach('Close API request context', async () => {
        await apiRequest.dispose();
    })
})