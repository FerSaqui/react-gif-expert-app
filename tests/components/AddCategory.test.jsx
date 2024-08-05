import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en AddCategory.jsx', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole("textbox");
        fireEvent.input(input, { target: { value: 'Saitama' } });
        expect(input.value).toBe("Saitama");
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = "Saitama";
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole("textbox");
        const form = screen.getByTestId("formAddCategory");
        
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        //screen.debug();
        expect(input.value).toBe("");
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar onNewCategory si el input esta vacío', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        
        const formulario = screen.getByTestId("formAddCategory");
        fireEvent.submit(formulario);

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});