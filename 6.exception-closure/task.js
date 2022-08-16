function parseCount (value) {
    if (isNaN(Number.parseInt(value))) {
        throw new Error ("Невалидное значение");
    } else {
        return Number.parseInt(value);
    }
}

function validateCount (value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
} 

class Triangle {
    constructor (side1, side2, side3) {
        if ( (side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1 ) {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        } else {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter () {
        return (this.side1 + this.side2 + this.side3);
    }

    getArea () {
        const p = this.getPerimeter() / 2;
        return Number(Number(Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))).toFixed(3));
    }

}

function getTriangle (side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch (error) {
        return  {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        };
    }
}

