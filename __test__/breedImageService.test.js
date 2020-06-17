const breedImageService = require('../services/breedImageService');

describe('Test for breedImageService', () => {
  const breed = "chow"
  test('Test for generation of breed image URL', () => {
    expect(breedImageService.buildImageUrl(breed)).toMatch(`https://dog.ceo/api/breed/${breed}/images/random`);
  });

  test('Check final result of one breed', async () => {
    const promiseData = await breedImageService.buildDataFromUrl(breed);
    expect(promiseData).toMatchSnapshot({
      image: expect.any(String)
    });
  });

  test('Check final result of one breed', async () => {
    const breedChow = "chow";
    const breedChihuahua = "chihuahua"
    const breeds = [breedChow, breedChihuahua];
    await breedImageService.getImagesUrls(breeds).then(data => {
      console.log(data)
      expect(data.length).toBeGreaterThan(0);
      expect(data.length).toBeLessThan(3);
      expect(data[0].breed).toMatch(breedChow);
      expect(data[1].breed).toMatch(breedChihuahua);
    });

  });

}); 