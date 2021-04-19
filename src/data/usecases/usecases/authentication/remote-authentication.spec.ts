import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClientSpy } from "../../../test/mock-http-client"

describe('Remote Authentication', () => {
    test('Should call HttpPostClient with correct URL', async () => {
        const url = 'whatever_url'
        const httpPostClientSpy = new HttpPostClientSpy()
        const sut = new RemoteAuthentication(url, httpPostClientSpy)
        sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    })
})
