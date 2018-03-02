import { Image, ImageSize } from "./image";


describe("Example of a test", () => {

    describe("Image size is correct", () => {

        it("should return Small for an image 64px in the largest dimension H", () => {
            const image = new Image({height: 64, width: 63} as Image);
            expect(image.size).toBe(ImageSize.Small);
        });

        it("should return Small for an image 64px in the largest dimension W", () => {
            const image = new Image({height: 7, width: 64} as Image);
            expect(image.size).toBe(ImageSize.Small);
        });

        it("should return Medium for an image 300 in the largest dimension W", () => {
            const image = new Image({height: 6, width: 300} as Image);
            expect(image.size).toBe(ImageSize.Medium);
        });


        it("should return Medium for an image 300 in the largest dimension H", () => {
            const image = new Image({height: 300, width: 64} as Image);
            expect(image.size).toBe(ImageSize.Medium);
        });

        //"..."
    })
});