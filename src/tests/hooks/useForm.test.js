import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Test for useForm hook', () => {
    const initialForm = {
        name:'Jonathan',
        email: 'jonathan@correo.com'
    };

    test('should return a default form', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current || null;
        
        expect(values.name).toBe('Jonathan');
        expect(values.email).toBe("jonathan@correo.com");
        expect(values).toEqual(initialForm);

        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe("function");
    });

    test('should change the name of the form value', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current || null;

        act( () => {
            handleInputChange({
                target:{
                    name:'name',
                    value:'pedro',
                }
            });
        });

        console.log(result.current[0].name);
        expect(result.current[0].name).toBe("pedro");
        expect(result.current[0].email).toBe("jonathan@correo.com");
        expect(result.current[0]).toEqual({...initialForm, name:"pedro"});
    });

    test('should change the email of the from', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({
                target:{
                    name: 'email',
                    value: 'pedro@correo.com'
                }
            });
        });

        expect(result.current[0].name).toBe('Jonathan');
        expect(result.current[0].email).toBe("pedro@correo.com");
        expect(result.current[0]).toEqual({ ...initialForm, email: "pedro@correo.com" });
    })

    test('should reset the form on reset() call', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current || null;

        act(() => {
          handleInputChange({
            target: {
              name: "name",
              value: "Chinto",
            }
          });
        });

        expect(result.current[0].name).toBe('Chinto');
        expect(result.current[0].email).toBe("jonathan@correo.com");
        expect(result.current[0]).toEqual({ ...initialForm, name: 'Chinto'})

        act(() => {
          reset();
        });

        expect(result.current[0].name).toBe("Jonathan");
        expect(result.current[0].email).toBe("jonathan@correo.com");
        expect(result.current[0]).toEqual({ ...initialForm });
    });

});