import {renderHook} from "@testing-library/react";
import useAlert from "./useAlert.hook";

describe('useAlert', () => {
    describe('when calling dispatch success', () => {
        it('should render a SUCCESS message', async () => {
            jest.spyOn(window, 'alert').mockImplementation(() => {});
            const view = renderHook(() => useAlert(), {});

            view.result.current.dispatchSuccessAlert('successful dispatch!');
            expect(window.alert).toBeCalledWith('SUCCESS: successful dispatch!');
        })
    })
    describe('when calling dispatch error', () => {
        it('should render a ERROR message', async () => {
            jest.spyOn(window, 'alert').mockImplementation(() => {});
            const view = renderHook(() => useAlert(), {});

            view.result.current.dispatchErrorAlert('error in dispatch :/');
            expect(window.alert).toBeCalledWith('ERROR: error in dispatch :/');
        })
    })
})