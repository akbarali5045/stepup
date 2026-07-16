import Container from "@/components/layout/Container";

export default function AnnouncementBar() {
  return (
    <div className="bg-black text-white">
      <Container>
        <div className="flex h-10 items-center justify-center">
          <p className="text-sm font-medium tracking-wide">
            🚚 Free Shipping on orders over PKR 5,000
          </p>
          
        </div>
      </Container>
    </div>
  );
}