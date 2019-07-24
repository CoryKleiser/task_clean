describe('price calculator', () => {
	
	it('should calc price right when userType === 0 and productType === 0 and product was release on same day', () => {
		const userType = 0;
		const productType = 0;
		const price = 1;
		const publishedDate = new Date();

		const expected = 16;
		const actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right when userType === 0 and productType === 0 and product was NOT release on same day', () => {
		const userType = 0;
		const productType = 0;
		const price = 1;
		const publishedDate = new Date('5/5/1999');

		const expected = 26;
		const actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it ('should calc price right when userType === 0 and productType === 1', () => {
		const userType = 0;
		const productType = 1;
		const price = 1;
		const publishedDate = new Date('5/5/1999');

		const expected = 36;
		const actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	})

	it ('should calc price right when userType === 1 and productType === 1', () => {
		const userType = 1;
		const productType = 1;
		const price = 1;
		const publishedDate = new Date('5/5/1999');

		const expected = 31;
		const actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	})

	it ('should calc price right when userType === 1 and productType === 0 and product was NOT released same day', () => {
		const userType = 1;
		const productType = 0;
		const price = 1;
		const publishedDate = new Date('5/5/1999');

		const expected = 21;
		const actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	})

	it ('should calc price right when userType === 1 and productType === 0 and product was released same day', () => {
		const userType = 1;
		const productType = 0;
		const price = 1;
		const publishedDate = new Date();

		const expected = 11;
		const actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	})
});
