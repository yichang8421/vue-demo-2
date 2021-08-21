import compute from "@/libs/utils";

export default function calculatorReducer(data: CalculatorData): CalReducer {
    function setResult(): number {
        return compute(
            data.curMethod,
            data.firstNumber,
            data.secondNumber
        );
    }

    function setNumber(field: string, value: number): number {
        switch (field) {
            case "firstNumber":
                data.firstNumber = value;
                break;
            case "secondNumber":
                data.secondNumber = value;
                break;
            default:
                break;
        }

        return setResult();
    }

    function changeMethod(method: string): number {
        data.curMethod = method;
        return setResult();
    }

    return {
        setNumber,
        changeMethod
    };
}