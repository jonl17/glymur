export interface ContactInformationInterface {
  name: string
  street: string
  city: string
  email: string
  telephone: string
}

export const contactResolver = (node: any): ContactInformationInterface => ({
  ...node.data,
})
