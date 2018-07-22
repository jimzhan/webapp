
export default {
  ava: {
    concurrency: 5,
    failFast: true,
    failWithoutAssertions: false,
    tap: false,
    compileEnhancements: false,
    require: [
      '@babel/register',
    ],
  },
}
