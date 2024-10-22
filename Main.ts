// let sides: Array<number> = [1414214, 1414214, 2000000];
let sides: Array<number> = [4, 4, 6];
// 判断是否可以构成三角形
if (sides[0] + sides[1] <= sides[2]) {
    console.log("不能构成三角形");
} else {
    Triangle(sides);
}

// 给定对应边长，判定角度是否≈90度
// equal: 等腰边, hypotenuse: 斜边
function IsoscelesTriangleAngle(equal: number, hypotenuse: number): boolean {
    // 求弧度
    let radian: number = Math.acos((Math.pow(equal, 2) + Math.pow(equal, 2) - Math.pow(hypotenuse, 2)) / (2 * equal * equal));
    // 求角度
    let angle: number = radian * 180 / Math.PI;
    // 保留两位小数
    let simplify: number = Math.round(angle * 100) / 100;
    // 判断是否≈90度
    if (89.99 <= simplify && simplify <= 90.01) {
        return true;
    }
    return false;
}

// 判断是否为等腰直角三角形
function IsoscelesRightTriangle(sides: Array<number>): boolean {
    // 判断等腰的是哪两条边
    if (sides[0] == sides[1]) {
        if (IsoscelesTriangleAngle(sides[0], sides[2])) {
            return true;
        }
    } else if (sides[0] == sides[2]) {
        if (IsoscelesTriangleAngle(sides[0], sides[1])) {
            return true;
        }
    } else if (sides[1] == sides[2]) {
        if (IsoscelesTriangleAngle(sides[1], sides[0])) {
            return true;
        }
    }
    return false;
}

// 判断三角形类型
function Triangle(sides: Array<number>): void {
    if (sides[0] == sides[1] && sides[1] == sides[2]) {
        console.log("等边三角形");
    } else if (sides[0] == sides[1] || sides[0] == sides[2] || sides[1] == sides[2]) {
        if (IsoscelesRightTriangle(sides)) {
            console.log("等腰直角三角形");
        } else {
            console.log("等腰三角形");
        }
    } else if (
        sides[0] * sides[0] + sides[1] * sides[1] == sides[2] * sides[2] ||
        sides[0] * sides[0] + sides[2] * sides[2] == sides[1] * sides[1] ||
        sides[1] * sides[1] + sides[2] * sides[2] == sides[0] * sides[0]) {
        console.log("直角三角形");
    } else {
        console.log("其他三角形");
    }
}
