class MathHelper{

    static quadraticPositive(A, B, C){
        var radicand = Math.sqrt((B * B) - (4 * A * C));

        return (-B + radicand) / (2*A);
    }

    static quadraticNegative(A, B, C){
        var radicand = Math.sqrt((B * B) - (4 * A * C));

        return (-B - radicand) / (2*A);
    }
}