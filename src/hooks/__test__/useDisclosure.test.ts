import { act, renderHook } from '@testing-library/react';

// Hooks
import { useDisclosure } from '../useDisclosure';

describe('useDisclosure', () => {
  it('Should close by default', () => {
    const { result } = renderHook(useDisclosure);

    expect(result.current.isOpen).toBeFalsy();
  });

  it('Should open', () => {
    const { result } = renderHook(useDisclosure);

    expect(result.current.isOpen).toBeFalsy();
    act(() => {
      result.current.handleOpen();
    });
    expect(result.current.isOpen).toBeTruthy();
  });

  it('Should close', () => {
    const { result } = renderHook(useDisclosure);

    expect(result.current.isOpen).toBeFalsy();
    act(() => {
      result.current.handleOpen();
    });
    expect(result.current.isOpen).toBeTruthy();
    act(() => {
      result.current.handleClose();
    });
    expect(result.current.isOpen).toBeFalsy();
  });

  it('Should toggle between close and open', () => {
    const { result } = renderHook(useDisclosure);

    expect(result.current.isOpen).toBeFalsy();
    act(() => {
      result.current.handleToggle();
    });
    expect(result.current.isOpen).toBeTruthy();
    act(() => {
      result.current.handleToggle();
    });
    expect(result.current.isOpen).toBeFalsy();
  });
});
