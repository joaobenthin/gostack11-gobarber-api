import IParseTemplateDTO from '../dtos/IParseMailemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseTemplateDTO): Promise<string>;
}
