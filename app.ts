function totalLength(x: string, y: string): number
function totalLength(x: any[], y: any[]): number
function totalLength(x: (string | any[]), y: (string | any[])): number {
    var total: number = x.length + y.length;

    if (x instanceof Array) {
        x.push('abc');
    };

    if (x instanceof String) {
        x.substr(1);
    };

    return total;
}