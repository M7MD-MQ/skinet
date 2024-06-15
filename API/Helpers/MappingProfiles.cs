using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            //to match product to Dtos, because AutoMapper can not match deferent types like (obj -to- string)!
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(d => d.ProductBrand, o => o.MapFrom(s => s.ProductBrand.Name))
                .ForMember(d => d.ProductType, o => o.MapFrom(s => s.ProductType.Name))
                //.ForMember(d => d.PictureUrl, o => o.MapFrom(s => "https://localhost:5001/" + s.PictureUrl));
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ProductUrlResolver>());

                
        }
    }
}