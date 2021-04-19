import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClientSpy } from "../../../test/mock-http-client"

type SutTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'whatever_url'): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    return {
        sut,
        httpPostClientSpy
    }
}

describe('Remote Authentication', () => {
    test('Should call HttpPostClient with correct URL', async () => {
        const url = 'whatever_url'
        const { sut, httpPostClientSpy } = makeSut(url)
        sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    })
})