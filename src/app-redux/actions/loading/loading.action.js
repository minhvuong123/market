export const LOADING_STATUS = 'LOADING_STATUS';

export function setLoading(loading) {
  return {
    type: LOADING_STATUS,
    loading
  }
}
