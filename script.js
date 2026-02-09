// Function to find the area of a triangle
function findTriangleArea(base, height) {
    return (base * height) / 2;
}

// Function to find the volume of a sphere
function findSphereVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

// Call triangle area function with different parameters
console.log("Triangle Area (base: 3, height: 4): " + findTriangleArea(3, 4).toFixed(1));
console.log("Triangle Area (base: 5, height: 7): " + findTriangleArea(5, 7).toFixed(1));

// Call sphere volume function with different parameters
console.log("Sphere Volume (radius: 3): " + findSphereVolume(3).toFixed(1));
console.log("Sphere Volume (radius: 5): " + findSphereVolume(5).toFixed(1));